const { describe, test } = require('node:test')
const MarkovMachine = require('./markov');

describe('MarkovMachine', () => {

  test('creates an instance of MarkovMachine', () => {
    const mm = new MarkovMachine("the cat in the hat");
    expect(mm).toBeInstanceOf(MarkovMachine);
  });

  test('builds chains from the given text', () => {
    const mm = new MarkovMachine("the cat in the hat");
    expect(mm.chains).toEqual(expect.any(Map));
  });

  test('outputs some text', () => {
    const mm = new MarkovMachine("the cat in the hat");
    const output = mm.makeText();
    expect(output).toEqual(expect.any(String));
    expect(output.split(" ").length).toBeLessThanOrEqual(100);
  });

  test('outputs text of specified length', () => {
    const mm = new MarkovMachine("the cat in the hat");
    const output = mm.makeText(10);
    expect(output.split(" ").length).toBeLessThanOrEqual(10);
  });

});
