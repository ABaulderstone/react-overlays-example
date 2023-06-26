import { useState } from 'react';
import style from './App.module.scss';
import AlbumsFlex from './components/AlbumsFlex';
import AlbumCard from './components/AlbumCard';
function App() {
  return (
    <main className={style.main}>
      <h1 className={style.heading}>My Favourite Albums</h1>
      <AlbumsFlex>
        <AlbumCard
          title='Flower Boy'
          band='Tyler, The Creator'
          rating={5}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png'
        />
        <AlbumCard
          title='xx'
          band='The xx'
          rating={4}
          coverUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xx_album_cover.svg/1280px-Xx_album_cover.svg.png'
        />
        <AlbumCard
          title='Extortion'
          band='Extortion'
          rating={5}
          coverUrl='https://f4.bcbits.com/img/a1895743034_16.jpg'
        />
        <AlbumCard
          title='Bronco'
          band='Orville Peck'
          rating={4.5}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Bronco_orville_peck.jpeg/220px-Bronco_orville_peck.jpeg'
        />
        <AlbumCard
          title='Blonde'
          band='Frank Ocean'
          rating={4}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg'
        />
        <AlbumCard
          title='Flower Boy'
          band='Tyler, The Creator'
          rating={5}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png'
        />
        <AlbumCard
          title='Reinventing Axl Rose'
          band='Against Me!'
          rating={4}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Against_Me%21_-_Against_Me%21_Is_Reinventing_Axl_Rose_cover.jpg/220px-Against_Me%21_-_Against_Me%21_Is_Reinventing_Axl_Rose_cover.jpg'
        />
        <AlbumCard
          title='24 Hour Revenge Therapy'
          band='Jawbreaker'
          rating={5}
          coverUrl='https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Jawbreaker_-_24_Hour_Revenge_Therapy_cover.jpg/220px-Jawbreaker_-_24_Hour_Revenge_Therapy_cover.jpg'
        />
      </AlbumsFlex>
    </main>
  );
}

export default App;
