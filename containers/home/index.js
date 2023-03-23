import React from 'react';
import FeaturedMovie from '@/components/featured-movie';
import Movies from '@/mocks/movies.json'

export default function HomeContainer() {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}/>
    </div>
  )
}
