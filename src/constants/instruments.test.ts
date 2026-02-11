import { getInstrumentByKey, instruments } from './instruments';

describe('getInstrumentByKey', () => {
  it('should find piano by key', () => {
    const instrument = getInstrumentByKey('piano');
    expect(instrument).toBeDefined();
    expect(instrument?.name).toBe('piano');
    expect(instrument?.key).toBe('C');
    expect(instrument?.transposeFactor).toBe(0);
  });

  it('should find clarinet by key', () => {
    const instrument = getInstrumentByKey('clarinet');
    expect(instrument).toBeDefined();
    expect(instrument?.name).toBe('clarinet');
    expect(instrument?.key).toBe('Bb');
    expect(instrument?.transposeFactor).toBe(2);
  });

  it('should find altoSax by key', () => {
    const instrument = getInstrumentByKey('altoSax');
    expect(instrument).toBeDefined();
    expect(instrument?.name).toBe('alto sax');
    expect(instrument?.key).toBe('Eb');
    expect(instrument?.transposeFactor).toBe(3);
  });

  it('should find frenchHorn by key', () => {
    const instrument = getInstrumentByKey('frenchHorn');
    expect(instrument).toBeDefined();
    expect(instrument?.name).toBe('french horn');
    expect(instrument?.key).toBe('F');
    expect(instrument?.transposeFactor).toBe(1);
  });

  it('should return undefined for unknown key', () => {
    expect(getInstrumentByKey('unknown')).toBeUndefined();
    expect(getInstrumentByKey('')).toBeUndefined();
  });

  it('should find all instruments by their keys', () => {
    for (const [key, instrument] of Object.entries(instruments)) {
      const found = getInstrumentByKey(key);
      expect(found).toBeDefined();
      expect(found?.name).toBe(instrument.name);
      expect(found?.transposeFactor).toBe(instrument.transposeFactor);
    }
  });

  it('should have correct transpose factors for instrument families', () => {
    // Concert pitch instruments (C, factor 0)
    const concertPitch = ['piano', 'flute', 'guitar', 'violin', 'viola', 'cello', 'trombone', 'tuba', 'oboe', 'doubleBass'];
    for (const key of concertPitch) {
      expect(getInstrumentByKey(key)?.transposeFactor).toBe(0);
    }

    // Bb instruments (factor 2)
    const bbInstruments = ['clarinet', 'sopranoSax', 'tenorSax', 'trumpet', 'baritoneHorn', 'bassClarinet'];
    for (const key of bbInstruments) {
      expect(getInstrumentByKey(key)?.transposeFactor).toBe(2);
    }

    // Eb instruments (factor 3)
    const ebInstruments = ['altoSax', 'bariSax', 'altoClarinet'];
    for (const key of ebInstruments) {
      expect(getInstrumentByKey(key)?.transposeFactor).toBe(3);
    }

    // F instruments (factor 1)
    expect(getInstrumentByKey('frenchHorn')?.transposeFactor).toBe(1);
  });
});
