<h1 align="center"> UNiCycle </h1>
<h2 align="center"><em> Where we help you with waste management and make world a better place</em></h2>

- Published Site: 
https://unicycle-f1cf4.web.app/
- GitHub Pages: https://github.com/UW-INFO442-AU23/unicycle


## Group Members:
- Xinyu Chang
- Yunjing Zhang
- Wei Wang
- Siyu Lin
- Maria M


## Our Mission：

We mainly focus on the 12th Goal - **_“RESPONSIBLE CONSUMPTION AND PRODUCTION”._** Based on the goal targets listed on the UN website, goal 12 mainly wants to promote sustainable consumption and production by applying efficient resource management, ensuring public awareness and education for sustainable development, and encouraging the public to adopt sustainable practices.  

As we observed, proper Solid Waste Management (SWM) is crucial for environmental protection and the well-being of human beings. If improperly managed waste, it may contaminate soils, water, and air, affecting the environment and human health.(Ntuli & Mlingwa, 2021). Also, we found that developing countries often face challenges related to ineffective waste collection strategies and lack of disposal sites, making implementing waste segregation crucial for achieving better waste management outcomes. There's a noted significant difference in attitudes towards waste segregation and recycling between different regions, suggesting an international disparity in waste management practices.(Diestro et al., 2021)

The insights from these articles underline the potential consequences of inadequate waste management practices and the disparities in waste segregation attitudes across different regions. These observations resonate with our objective of fostering a more sustainable and informed approach to waste management, particularly among international students who may come from varied waste management backgrounds. Therefore, we want to narrow down the scope of our solution to be in line with the main focuses listed above: **_How might we empower international students at UW with practical waste management knowledge, encouraging them to classify waste properly?_**


## Features:
- An **Educational Page** that empowers users with essential waste management knowledge.
- A **Garbage Disposal Bank** page that empowers users with comprehensive information about waste classification with search and filter functions.
- A page for **UW event sign-up** form that aims to empower users to engage in community-based waste management events.
- An **Interactive navigation bar** that allows users to switch back and forth between different pages.
- A **Multilanguage Dropdown** that allows users to switch different languages.


## User Personas: 
The two user personas we used when designing our product can be found [here](https://github.com/UW-INFO442-AU23/unicycle/blob/main/Personas%20%26%20Testing%20Protocol/INFO%20442_User%20Persona.pdf).



## Testing Protocol:
[Here](https://github.com/UW-INFO442-AU23/unicycle/blob/main/Personas%20%26%20Testing%20Protocol/Testing_protocol.md) is the testing protocol for our MVP. 


## Development Instruction:

### Built With:

- **React JS:** A JavaScript library for building user interfaces.
- **HTML/CSS/JavaScript:** Core technologies for building web pages.
- **Firebase:** A comprehensive app development platform used for its real-time database, authentication, and hosting capabilities.
- **i18next：** A powerful internationalization framework for JavaScript, i18next offers a comprehensive solution for managing translations and localization. It can be used in various JavaScript environments, including the browser, Node.js, and frameworks like React.
- **reacti18next:** This library is an extension of i18next that specifically integrates with React, allowing for efficient internationalization in React applications. It provides components and hooks to easily use translation and localization features.

### Web Services:

- **Firebase:** We're considering Firebase for its robust set of features such as real-time database, user authentication, and hosting services. It provides the infrastructure for saving user data in the "UW Community Events Subscription Form."

### Environment Setup:

1. **Install all npm packages**

    Navigate to the project folder and run:

    ```bash
    npm install
    ```

2. **Start the Development Server**

    To run the application, type the following command:

    ```bash
    npm start
    ```

    Stop the server with `Ctrl + C`.

3. **If you encounter any issues, try executing the following commands:**
    
    ```bash
    rm -rf node_modules
    npm install
    ```

4. **If you encounter any issues regarding localization or internationalization features, try executing the following commands:**

    ```bash
    npm install react-i18next i18next
    ```


### Deployment

1. **Deploy to GitHub Pages**

    First, build the project for production:

    ```bash
    npm run build
    ```

    Then deploy it to GitHub Pages:

    ```bash
    npm run deploy
    ```


## Additional Resources:

- **ReactJS Documentation:** [React Official Website](https://reactjs.org/)
- **Create React App Documentation:** [Create React App GitHub](https://github.com/facebook/create-react-app)
- **Firebase Documentation:** [Firebase Official Website](https://firebase.google.com/)
- **Reacti18:** [Reacti18 Website](https://react.i18next.com/)


## References:

All images and icons used in this project were retained from [Unsplash](https://unsplash.com), [flaticon](https://www.flaticon.com/) or retrived from Google Images with a free Creative Commons License. All videos used in this website was reatined from [Youtube](https://www.youtube.com/).

Ntuli, F., & Mlingwa, J. (2021). Waste segregation and potential for recycling - A case study in Dar es Salaam City, Tanzania. Waste Management & Research, 39(5), 507-516. https://doi.org/10.1080/27658511.2021.1935532

Diestro, D., Loyola, M.C.A., Potato, E.D., Solano, M.L.A., Vipinosa, L.D., & Borda, V.E. (2021). Attitude towards Waste Segregation and Recycling Practices: Input on Waste Management Program. http://researchjournal.capsu.edu.ph/index.php/crj20191/article/viewFile/102/pdf#:~:text=developing%20countries%20are%20the%20ineffective,waste%20segregation%20and%20recycling%20in

Ritchie, H., & Roser, M. (n.d.). Waste Management. Our World in Data. Retrieved November 18, 2023, from https://ourworldindata.org/waste-management

RTS. (2023). Plastic Pollution in The Ocean - 2023 Facts and Statistics. RTS. Retrieved November 18, 2023, from https://www.rts.com/blog/plastic-pollution-in-the-ocean-2023-facts-and-statistics

University of Washington Facilities. (n.d.). Disposal guide. Retrieved November 19, 2023, from https://facilities.uw.edu/services/recycling/disposal-guide&#8203

Global Goals. (n.d.). Goal 12: Responsible Consumption and Production. Retrieved November 19, 2023, from https://www.globalgoals.org/goals/12-responsible-consumption-and-production/
