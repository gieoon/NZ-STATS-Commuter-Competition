import copy from "rollup-plugin-copy";

export default {
  input: "placeholder.js",
  plugins: [
    copy({
      targets: [
        {
          src: "public/maps/*.json",
          dest: "build/maps",
          transform: (contents) => JSON.stringify(JSON.parse(contents)),
        },
      ],
    }),
  ],
};
