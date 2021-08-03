
    var defaultData = {
        cats: [
          { id: 1, title: "Все" },
          { id: 2, title: "Завтраки" },
          { id: 3, title: "Первые блюда" },
          { id: 4, title: "Гарниры" }
        ],
        products: [
          {
            id: 1,
            cid: 1,
            title: "Овсяная каша с фруктами",
            im: "<img class='img-fluid' src='i/im1.jpg'>",
            price: 30
          },
          {
            id: 2,
            cid: 1,
            title: "Яичница глазунья с овощами на сковородке",
            im: "<img class='img-fluid' src='i/im2.jpg'>",
            price: 25
          },
          {
            id: 3,
            cid: 1,
            title: "Сет азербайджанский завтрак",
            im: "<img class='img-fluid' src='i/im3.jpg'>",
            price: 10
          },
          {
            id: 4,
            cid: 4,
            title: "Яичница с помидорами по-бакински",
            im: "<img class='img-fluid' src='i/im4.jpg'>",
            price: 28
          },
          { id: 5, cid: 1, title: "Сырники со сметаной", im: "<img class='img-fluid' src='i/im5.jpg'>", price: 50},
          { id: 6, cid: 2, title: "Шпинатный крем-суп", im: "<img class='img-fluid' src='i/im6.jpg'>", price: 60},
          { id: 7, cid: 2, title: "Суп Пити", im: "<img class='img-fluid' src='i/im7.jpg'>", price: 118},
          { id: 8, cid: 2, title: "Борщ украинский", im: "<img class='img-fluid' src='i/im8.jpg'>", price: 68},
          { id: 9, cid: 2, title: "Суп Кюфта Бозбаш", im: "<img class='img-fluid' src='i/im9.jpg'>", price: 145},
          {
            id: 10,
            cid: 2,
            title: "Суп Соютма из ягненка",
            im: "<img class='img-fluid' src='i/im10.jpg'>",
            price: 150
          },
          { id: 11, cid: 3, title: "Картофель фри", im: "<img class='img-fluid' src='i/im11.jpg'>", price: 35 },
          {
            id: 12,
            cid: 3,
            title: "Картофель по-домашнему",
            im: "<img class='img-fluid' src='i/im12.jpg'>",
            price: 45
          }
        ],
      };
      
      var renderCats = defaultData.cats.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});