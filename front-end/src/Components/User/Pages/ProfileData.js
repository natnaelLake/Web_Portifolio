import React from "react";
import './styl.css'
export default function ProfileData() {
  return (
    <div>
      <div class="wrapper">
        <figure class="card">
          <img
            src="https://source.unsplash.com/Co8AlcOhIgE/640x640"
            width="640"
            height="640"
            alt=""
          />
          <figcaption>
            <blockquote>
              We shape our tools and then the tools shape us.
            </blockquote>
            <cite>
              Attributed to Winston Churchill, Marshall McLuhan, and John
              Culkin.
            </cite>
            <p class="credit">
              <strong>Caju Gomes</strong>,
              <a href="https://unsplash.com/photos/Co8AlcOhIgE">Unsplash</a>
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
