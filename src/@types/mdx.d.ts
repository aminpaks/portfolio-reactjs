// types/mdx.d.ts
declare module '*.md' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
