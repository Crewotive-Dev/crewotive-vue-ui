// import kareButton from '../components/UI/KareButton.vue';
// import sassVariables from './assets/variables.js'

// export default {
//   title: 'Components',
//   component: kareButton,
//   parameters:{
//     docs:{
//       description: {
//         component: "Merhaba ben bir butonum"
//       },
//     }
//   },
//   argTypes: {
//     label: { control: { type: 'text'} },
//     color: { control: { type : 'select', options : Object.keys(sassVariables['$theme-colors'].value).filter(val=>val.match(/-\d$/g)==null) } },
//     size: { control: { type : 'select', options : ['sm', 'md', 'lg'] } },
//     tint: { control: { type : 'number', min : "1", max : "9"} }
//   }
// };


// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { kareButton },
//   template: `<kare-button  v-bind="$props"/>`,
// });

// export const Default = Template.bind({});
// Default.args = {
//   label: 'Button',
//   color: 'primary'
// };

// export const Outline = Template.bind({});
// Outline.args = {
//   label: 'Outlined',
//   outline: true,
//   color: 'primary'
// };

// export const Small = Template.bind({});
// Small.args = {
//   label: 'Small',
//   size: 'sm',
//   color: 'primary'
// };

// export const Medium = Template.bind({});
// Medium.args = {
//   label: 'Medium',
//   size: 'md',
//   color: 'primary'
// };

// export const Large = Template.bind({});
// Large.args = {
//   label: 'Large',
//   size: 'lg',
//   color: 'primary'
// };
