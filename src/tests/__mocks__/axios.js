const axios = {
  get: jest.fn(),
};

axios.get.mockResolvedValue({
  data: [
    {
      id: '1',
      rocket_name: 'rocket',
      description: 'rocket description',
      flickr_images: ['https://flickr.com/photos/'],
    },
  ],
});

test('random test', () => {
  expect(2).toEqual(2);
});
export default axios;
