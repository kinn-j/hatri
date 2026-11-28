const MAX_BYTES = 100 * 1024 * 1024;
const TYPES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);
const REEL_ID = /^[A-Za-z0-9_-]{16,80}$/;

function reelText(input) {
  const title = typeof input?.title === 'string' ? input.title.trim() : '';
  const caption = typeof input?.caption === 'string' ? input.caption.trim() : '';
  const credit = typeof input?.credit === 'string' ? input.credit.trim() : '';
  if (!title || title.length > 80 || caption.length > 240 || credit.length > 40) throw Error('Check the title, caption and display name.');
  return {title, caption, credit};
}

function reelRecipe(input) {
  const recipeName = typeof input?.recipeName === 'string' ? input.recipeName.trim() : '';
  if (!recipeName || recipeName.length > 140 || /[\x00-\x1f\x7f<>]/.test(recipeName)) {
    throw Error('Select a valid Hatri recipe for this video.');
  }
  return {recipeName};
}

function reelDraft(input) {
  if (!TYPES.has(input?.contentType) || !Number.isInteger(input?.sizeBytes) ||
      input.sizeBytes < 1 || input.sizeBytes > MAX_BYTES) throw Error('Choose an MP4, WebM, or MOV video up to 100 MB.');
  const subtitles = typeof input.subtitles === 'string' ? input.subtitles.trim() : '';
  if (Buffer.byteLength(subtitles) > 24_576 || (subtitles && !/^WEBVTT(?:[ \t][^\r\n]*)?\r?\n/.test(subtitles))) {
    throw Error('Choose a WebVTT caption file up to 24 KB.');
  }
  return {...reelText(input), ...reelRecipe(input), contentType:input.contentType, sizeBytes:input.sizeBytes,
    subtitles, subtitleLanguage:input.subtitleLanguage === 'hi' ? 'hi' : 'en'};
}

function matchesVideoHeader(data, type) {
  if (data.length < 16) return false;
  if (type === 'video/webm') {
    return data.readUInt32BE(0) === 0x1a45dfa3 && data.indexOf(Buffer.from([0x42, 0x82, 0x84, 0x77, 0x65, 0x62, 0x6d]), 4) !== -1;
  }
  const size = data.readUInt32BE(0);
  const atom = data.toString('ascii', 4, 8);
  if (type === 'video/quicktime' && size >= 8 && ['moov', 'mdat', 'wide'].includes(atom)) return true;
  if (atom !== 'ftyp' || size < 16 || size > data.length) return false;
  const brands = [data.toString('ascii', 8, 12)];
  for (let offset = 16; offset + 4 <= size; offset += 4) brands.push(data.toString('ascii', offset, offset + 4));
  return type === 'video/quicktime' ? brands.includes('qt  ') :
    brands.some(brand => /^(?:iso[m2-9]|mp4[12]|avc1|dash|M4V |MSNV|cmf[cs])$/.test(brand));
}

module.exports = {MAX_BYTES, REEL_ID, reelText, reelRecipe, reelDraft, matchesVideoHeader};
