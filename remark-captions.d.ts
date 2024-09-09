// remark-captions.d.ts

declare module 'remark-captions' {
  interface Options {
    figureClassName?: string;
    figcaptionClassName?: string;
    captionText?: string;
  }

  // The default export is a function that accepts options and returns a plugin
  const remarkCaptions: (options?: Options) => any;
  export default remarkCaptions;
}

