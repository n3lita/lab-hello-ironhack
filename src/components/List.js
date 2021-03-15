import React from 'react';
import ListItem from './ListItem'
import '../assets/css/List.css';

// const items = [
//   {
//     title: "Declarative",
//     description: "React makes it painless to create interactive UIs",
//     img: { src: '/images/icon1.png', alt: 'Declarative' }
//   },
//   {
//     title: "Components",
//     description: "React makes it painless to create interactive UIs",
//     img: { src: '/images/icon2.png', alt: 'Declarative' }
//   },
// ]

const List = () => {
  return (
    <div className="List">
      {/* {items.map(item => {
        return (
          <ListItem {...item} />
        )
      })} */}

      <ListItem
        title="Declarative"
        description="React makes it painless to create interactive UIs"
        img={{ src: '/images/icon1.png', alt: 'Declarative' }}
      />

      <ListItem
        title="Components"
        description="Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar."
        img={{ src: '/images/icon2.png', alt: 'Declarative' }}
      />

      <ListItem
        title="Single-way"
        description="Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar."
        img={{ src: '/images/icon3.png', alt: 'Declarative' }}
      />

      <ListItem
        title="JSX"
        description="Lorem fistrum por la gloria de mi madre apetecan apetecan se calle ustée al ataquerl te va a hasé pupitaa pecador a gramenawer amatomaa benemeritaar."
        img={{ src: '/images/icon4.png', alt: 'Declarative' }}
      />
    </div>
  );
};

export default List;