import mac from './../1.jpg';
import tofu from './../2.jpg';
import pad from './../3.jpg';

// Mock recipe data since we are not hooked up to a backend database or an API.
const recipes = [
    {
        id: 1,
        name: 'Mac & cheese',
        instructions: 'Cook the noodles, then add the cheese.',
        image: mac
    },
    {
        id: 2,
        name: 'Tofu Burger',
        instructions: 'Thaw the frozen Tofu Burger, and grill for 10 minutes.',
        image: tofu
    },
    {
        id: 3,
        name: 'Pad Thai',
        instructions: 'Cook the noodles and add spice.',
        image: pad
    }
]

export default recipes
