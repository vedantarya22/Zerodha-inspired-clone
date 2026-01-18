import React from "react";
function AccordianItem({ title, icon, id, items,parentId, defaultOpen = false }) {
  return (
    <div class="accordion-item ">
      <h2 class="accordion-header">
        <button
          className={`accordion-button`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={"false"}
          aria-controls={id}
        >
          <span
            className="material-symbols-outlined d-flex align-items-center justify-content-center"
            style={{
              color: "#387ED1",
              backgroundColor: "#F7FBFE",
              margin: "-1rem 1rem -1rem -1rem",
              width: "50px",
              height: "50px",
              borderRadius: "6px",
            }}
          >
            {icon || "add_circle"}
          </span>{" "}
          {title}
        </button>
      </h2>
      <div
        id={id}
        class={`accordion-collapse collapse `}
        data-bs-parent={`#${parentId}`}
      >
        <div class="accordion-body">
         <ul style={{ lineHeight: "2.5" }}>
            {items.map((item, index) => (
              <a href="#" style={{ textDecoration: "none",}}>
                  <li key={index} style={{ listStyleType: "disc",fontSize:"15px" }}>
                  {item}
              </li>
                </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordianItem;
