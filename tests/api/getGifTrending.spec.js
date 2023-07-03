import { getGifTrending } from "../../src/api/getGifTrending";

describe('Pruebas en getGifTrending', () => {
  test('debe retornar un arreglo de gifs', async () => { 
    const gifs = await getGifTrending();
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})