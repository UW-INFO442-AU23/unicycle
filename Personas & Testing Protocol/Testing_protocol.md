## Testing protocol

### Feature 1: Garbage Card Bank Search Feature
- **Requirement Specification**: Users should be able to search for specific items within the Garbage Card Bank using keywords. The search should yield accurate results based on the input and display relevant item cards. The “Search bar” should adapt to different screen sizes.
- **Testing Cases**:
  - No keyword is entered.
  - A valid single keyword is entered.
  - An invalid keyword or a keyword with no matching items is entered.
  - View the “Search bar” on different screen sizes (e.g., desktop, tablet, mobile).
- **Expected Results**: 
  - All item cards are displayed or a prompt to enter a search term is shown.
  - Item cards relevant to the keyword are displayed.
  - A message indicating "No results found" is displayed.
  - The Search bar adapts to different screen sizes, maintaining user-friendly layout and functionality.
- **Expected Deficiency**: 
  - The search may take some time if the database is large.
- **Unexpected Results**:
  - No item cards are displayed, even with valid keywords.
  - System crashes or freezes.
  - Misinterpretation of keywords leading to irrelevant results.
  - The Search bar does not adapt well to different screen sizes, causing layout issues or functionality loss.

### Feature 2: Garbage Card Bank Filter Feature
- **Requirement Specification**: Users should be able to filter item cards based on three UW Disposal guide categories: Recycle, Compost, and Landfill. The filter should immediately reflect on the displayed item cards. The Filter feature and Cards should adapt to different screen sizes.
- **Testing Cases**:
  - No filter is selected.
  - Only the "Recycle" category is selected.
  - Only the "Compost" category is selected.
  - Only the "Landfill" category is selected.
  - Multiple categories are selected (e.g., "Recycle" and "Compost").
  - All filter categories are selected.
  - View the Filter bar and the card on different screen sizes (e.g., desktop, tablet, mobile).
- **Expected Results**: 
  - All item cards are displayed.
  - Only item cards relevant to the selected category/categories are displayed.
  - The Cards and Filter bar adapt to different screen sizes, maintaining user-friendly layout and functionality.
- **Expected Deficiency**: 
  - Filtering may take some time if the database is large.
- **Unexpected Results**:
  - No item cards are displayed even with valid filter selections.
  - System crashes or freezes.
  - The Filter feature and Cards do not adapt well to different screen sizes, causing layout issues or functionality loss.

### Feature 3: UW Community Form Feature
- **Requirement Specification**: After the user fills out and submits the basic demographic information, the form should accurately capture and submit user data to Firebase. It should handle erroneous input effectively by displaying appropriate error messages. Upon submission, a confirmation pop-up should appear. The form should adapt to different screen sizes.
- **Testing Cases**:
  - Submit the form with all fields filled out correctly.
  - Submit the form with erroneous input, such as an invalid email format.
  - Submit the form with a registered email address.
  - Submit the form and view the pop-up confirmation page.
  - View the form on different screen sizes (e.g., desktop, tablet, mobile).
- **Expected Results**: 
  - Data is correctly stored in Firebase and no error messages are displayed.
  - An appropriate error message is displayed for the invalid email format.
  - An appropriate error message is displayed for the registered email address.
  - The confirmation pop-up appears and displays the correct information.
  - The form adapts to different screen sizes, maintaining user-friendly layout and functionality.
- **Expected Deficiency**: 
  - Form submission may take some time if the server is busy.
  - Error messages may not be clear or informative enough for the user to understand the mistake.
- **Unexpected Results**:
  - Data is not correctly stored in Firebase despite correct form submission.
  - No error messages are displayed for erroneous input.
  - The confirmation pop-up does not appear or displays incorrect information.
  - The form does not adapt well to different screen sizes, causing layout issues or functionality loss.

### Feature 4: Multilanguage Mode Toggle Switch Feature
- **Requirement Specification**: The website should dynamically update its content across all sections, both interactive and static, based on the selected language (English or Chinese) using the toggle switch. This includes translations for static features, such as educational text on the homepage, and interactive features, like the database-driven card feature.
- **Testing Cases**:
  - Toggle the switch to change the language to Chinese and verify that all content is correctly translated.
  - Toggle the switch to change the language to English and verify that all content is correctly translated.
  - Inspect static content like educational text on the homepage in both languages.
  - Inspect interactive content like database-driven cards in both languages.
  - View the toggle bar on different screen sizes (e.g., desktop: within the navigation bar; mobile: within the hamburger menu).
- **Expected Results**: 
  - All content is correctly translated into Chinese and no English text remains.
  - All content is correctly translated to English and no Chinese text remains.
  - Static content remains accurate and correctly translated in both languages.
  - Dynamic content remains accurate and correctly translated in both languages.
  - The toggle bar lists correctly on different screen sizes.
  - All translated content is translated promptly when the user transitions to a different page.
- **Expected Deficiency**: 
  - Few translations may not be accurate or may lose context.
  - The toggle switch may take some time to update the content, especially if the database is large.
  - All translated content will have delayed translation when the user switches to a different page.
- **Unexpected Results**:
  - Some content remains untranslated or is incorrectly translated.
  - Database-driven cards do not update or display incorrect translations.
  - The toggle bar wrongly lists in different screen sizes.

### Feature 5: Interactive Navigation Bar Feature
- **Requirement Specification**: The Interactive Navigation Bar should provide a user-friendly interface, allowing users to smoothly navigate between different pages. This bar must be responsive, adapting to various screen sizes across devices like desktops, tablets, and smartphones. A mobile version of the navigation bar, typically a "hamburger menu," should be included for smartphone screens to enhance the user experience on smaller devices.
- **Testing Cases**:
  - Test clicking on navigation links to ensure they lead to the correct pages.
  - Evaluate the navigation bar on different devices (desktops, tablets, smartphones) and screen sizes to check for appropriate responsiveness.
  - Assess the navigation bar's adaptability to changes in device orientation.
  - Verify uniformity in the appearance and functionality of the navigation bar across various web pages.
  - Ensure the navigation bar is accessible via keyboard and compatible with screen readers.
- **Expected Results**: 
  - Navigation links accurately direct users to the intended pages.
  - The navigation bar effectively adjusts to different devices and screen sizes, including a functional hamburger menu on smartphones.
  - Responsive and correct reorientation of the navigation bar upon changes in device orientation.
  - Consistent design and operational efficiency of the navigation bar on all website pages.
  - Complete keyboard accessibility and screen reader compatibility.
- **Expected Deficiency**: 
  - Possible slight delays in the response of the navigation bar on certain devices or when adjusting to screen size changes.
  - The navigation bar might not be fully optimized for all web browsers or their various versions.
  - Occasional appearance or functional discrepancies in the navigation bar on outdated systems or browsers.
- **Unexpected Results**:
  - Navigation links failing to direct to the correct pages or being non-functional.
  - The navigation bar not properly adjusting to different screen sizes or orientations, including issues with the hamburger menu on smartphones.
  - Insufficient keyboard navigation support or screen reader compatibility.

## Known Bug
The issue displayed in the console when watching the Homepage video is related to cross-origin resource sharing (CORS) and is not a result of our codebase; it pertains to the external resources being accessed. Our application is verified bug-free in both desktop and mobile versions of Google Chrome as per our testing protocol, which includes a known bug identification and corresponding workarounds, ensuring compliance with the outlined requirements.