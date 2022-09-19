import React from "react";
import "./home.css";

function HomeComponent() {
  return (
    <main>
     <section className="dark-bg" id="hero">
      <div className="container">
        <div className="d-flex h-100 flex-column text-light justify-content-center">
          <h1 className="display-1">Lawyers</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum non sapien nec cursus. Aliquam eros augue, placerat vitae rutrum quis, fringilla et arcu. Vivamus vulputate metus id lacinia feugiat. Fusce elementum nunc rutrum sagittis dapibus.</p>
        </div>
      </div>
     </section>
    </main>
  );
}

export default HomeComponent;
