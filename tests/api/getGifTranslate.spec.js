import { getGifTranslate } from "../../src/api/getGifTranslate"

describe('Pruebas en getGifTranslate', () => {
  test('Debería retornar un solo gif', async () => { 
    const gif = await getGifTranslate('valorant');
    expect(gif).toBeTruthy();
    expect(gif.length).toBeUndefined();
  })
  
  test('Debería retornar un objeto con id, title y url', async () => {
    const gif = await getGifTranslate('valorant');
    expect(gif).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})