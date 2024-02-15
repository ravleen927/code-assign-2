
Storybook will be available at [http://localhost:3000/storybook](http://localhost:3000/storybook).

## Components

The library contains the following components:

- Button
- Label
- Text
- Table
- Table Header
- Table Row
- Table Cell
- Table Footer
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

Each component folder adheres to the following file structure:

- `Component_name.tsx`
- `Component_name.stories.tsx`
- `Component_name.types.tsx`
- `Component_name.tests.tsx`
- `Index.ts`

StyledComponents are used for styling, ensuring that all components are responsive.

## Storybook Functionality

Storybook provides controls to modify properties such as default text and background color for each component. Additionally, all components have a default state and a disabled state. When disabled, components visually change color (e.g., greyed out), and the cursor indicates that the user cannot click on the component.

## Testing

All components have at least two tests:

1. A test that checks that the component is visible.
2. A test that checks that the background color changes when the component is in the 'disabled' state.

