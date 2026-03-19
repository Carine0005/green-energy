 // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/solar-panel2.jpg",
           "./img/solar-panel3.jpg",
           "./img/financing.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:
            ${images[0].src}
            ${images[1].src}
            ${images[2].src}`);
    }
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    const buttons = document.querySelectorAll(".solution-btn");
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
const resources = {
    solar: {
        headingContent: "Community Solar Programs",
        bodyText: "Community solar allows people to benefit from renewable energy without paying the full cost of rooftop installation. By subscribing to a shared solar farm, households can lower electricity bills and access clean power even if they rent or cannot install panels at home.",
        imgUrl: "./img/solar-panel2.jpg",
        imgAlt: "Community solar panels serving neighborhood homes"
    },
    efficiency: {
        headingContent: "Home Efficiency Upgrades",
        bodyText: "Affordable clean energy starts with using less energy. Better insulation, LED lighting, smart thermostats, and energy-efficient appliances reduce monthly utility costs. These upgrades are often cheaper than major installations and help families save money over time.",
        imgUrl: "./img/solar-panel3.jpg",
        imgAlt: "Energy efficient home with smart devices"
    },
    financing: {
        headingContent: "Smart Financing and Rebates",
        bodyText: "Government rebates, tax credits, and low-interest financing can make green energy realistic for average households. Spreading costs over time and combining programs can reduce the upfront burden and help more families adopt clean technologies such as heat pumps and solar systems.",
        imgUrl: "./img/financing.jpg",
        imgAlt: "Family reviewing green energy rebate and financing options"
    }
};
    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    const contentContainer = document.getElementById("dynamic-content");
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    function handleSelection(event) {
    /* Remove id active-button from current active button */
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute("id")) {
            buttons[i].removeAttribute("id");
        }
    }
     
    /* 
    Start your handleSelection function here. */ 
         event.target.setAttribute("id", "active-button");
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    const key = event.target.dataset.content;
    const selectedContent = resources[key];
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
      contentContainer.innerHTML = `
        <h1>${selectedContent.headingContent}</h1>
        <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
        <p>${selectedContent.bodyText}</p>
    `;
}
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleSelection);
}