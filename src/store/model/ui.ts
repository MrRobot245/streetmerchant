import {Store} from './store';

export const UI: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.comProduct__badge--in-stock ',
      text: ['In-Stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.shopto.net/en/ps5du00-dualsense-controller-playstation-5-p195100/',
    },
    // {
    //   brand: 'sony',
    //   series: 'sonyps5c',
    //   url: 'https://www.shopto.net/en/ps5hw01-playstation-5-console-p191472/',
    // },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://store.ui.com/collections/early-access/products/dream-router-ea',
    },
    // {
    //   brand: 'sony',
    //   model: 'ps5 console',
    //   series: 'sonyps5c',
    //   url: 'https://store.ui.com/products/unifi-6-long-range-access-point',
    // },

    
  ],
  name: 'ui',
};
