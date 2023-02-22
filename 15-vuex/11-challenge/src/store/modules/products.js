export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: 'images/BookCollection.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image: require('../../images/MountainTent.jpg'),
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image: require('../../images/FoodBox.jpg'),
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
        {
          id: 'p4',
          image: 'images/CityofDubrovnik.jpg',
          title: 'CityofDubrovnik',
          description: 'Game of thrones, u kno?',
          price: 4_200_000.99,
        },
      ],
    }
  },
  mutations: {
  },
  actions: {

  },
  getters: {
    products(state) {
      return state.products;
    }
  }
}