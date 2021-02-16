let app = new Vue ({
  el: '#app',
  data: {
    headLinks: [
      'home',
      'about',
      'project',
      'services',
      'blog',
      'contact'
    ],
    activeImages: [],
    counterImg: 1,
    imgSlot: [
      {
        source: 'img/cover1.jpg',
        name: 'dry',
        counter: 1
      },
      {
        source: 'img/cover2.jpg',
        name: 'sponsorship',
        counter: 1
      },
      {
        source: 'img/cover3.jpg',
        name: 'vizeon',
        counter: 1
      },
      {
        source: 'img/cover3.jpg',
        name: 'vizeon',
        counter: 2
      },
      {
        source: 'img/cover2.jpg',
        name: 'sponsorship',
        counter: 2
      },
      {
        source: 'img/cover1.jpg',
        name: 'dry',
        counter: 2
      }
    ]
  },
  created() {
    this.imgSlot.forEach((element) => {
      if (element.counter == 1) {
        this.activeImages.push(element);
      }
    });
  },
  methods: {
    forward: function () {
      this.counterImg++;
      if (this.counterImg > 2) {
        this.counterImg = 1;
      }
      this.activeImages = [];
      this.imgSlot.forEach((element) => {
        if (element.counter == this.counterImg) {
          this.activeImages.push(element);
        }
      });
    },
    back: function () {
      this.counterImg--;
      if (this.counterImg < 1) {
        this.counterImg = 2;
      }
      this.activeImages = [];
      this.imgSlot.forEach((element) => {
        if (element.counter == this.counterImg) {
          this.activeImages.push(element);
        }
      });
    }
  }
});