import React from 'react';
import LibraryList from './library-list';

export default function LibraryView(props) {
  return (
    <section className="library-view">
      <div className="library-list">
        <LibraryList />
      </div>
    </section>
  );
}
