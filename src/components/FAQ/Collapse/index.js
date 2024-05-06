import { useState } from "react";

function CollapseComponent({ item }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      data-accordion-component="AccordionItem"
      className="mc-accordion__item mc-mb-4"
      onClick={toggleCollapse}
    >
      <div
        data-accordion-component="AccordionItemHeading"
        aria-level={4}
        role="heading"
        className="accordion__heading"
      >
        <div
          className="mc-accordion__button mc-p-4 mc-mb-1 undefined"
          id="accordion__heading-faq.general.question1"
          aria-disabled="false"
          aria-expanded="false"
          aria-controls="accordion__panel-faq.general.question1"
          role="button"
          tabIndex={0}
          data-accordion-component="AccordionItemButton"
        >
          <p className="mc-text--bold">{item.title}</p>
          {!isCollapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
              className="mc-icon mc-icon--md mc-ml-5 mc-accordion__icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.325 7.322a1.12 1.12 0 0 1 1.572 0L12 15.344l8.103-8.022a1.12 1.12 0 0 1 1.572 0c.433.43.433 1.126 0 1.556l-8.89 8.8a1.12 1.12 0 0 1-1.57 0l-8.89-8.8a1.092 1.092 0 0 1 0-1.556"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
              className="mc-icon mc-icon--md mc-ml-5 mc-accordion__icon"
            >
             <path
  stroke="currentColor"
  fillRule="evenodd"
  clipRule="evenodd"
  d="M19.92 15.8c-.19 0-.38-.07-.53-.22l-6.52-6.52c-.48-.48-1.26-.48-1.74 0l-6.52 6.52c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06L10.07 8a2.74 2.74 0 013.86 0l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
/>

            </svg>
          )}
        </div>
      </div>
      <div
        data-accordion-component="AccordionItemPanel"
        className="accordion__panel"
        id="accordion__panel-faq.general.question1"
        hidden=""
      >
       {
        isCollapsed && (
            <div className="mc-p-4 mc-pt-0 mc-mb-1">
            <p className="mc-opacity--hinted">{item.description}</p>
          </div>
        )
       }
      </div>
    </div>
  );
}

export default CollapseComponent;
