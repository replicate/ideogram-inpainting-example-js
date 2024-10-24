# Ideogram inpainting

This is a simple demo showing how to use the Ideogram inpainting model on Replicate using Node.js.

![inpainting](https://github.com/user-attachments/assets/2618ebc3-66fc-4d9b-9399-fcd57d07835a)

## What is inpainting?

Inpainting is like an AI-powered erasing and painting tool. You can use it to remove unwanted objects from an image, fill in missing parts of an image, or even create new images from scratch.

To inpaint an image you need, you need:

1. A starting image
2. A mask image that describes which parts of the image you want to inpaint. **Black** areas are inpainted and **white** areas are left unchanged.
3. A text prompt that describes the changes you want to see.


## Usage

To run this demo, you'll need to have [Node.js](https://nodejs.org) installed.

Create a [Replicate API token](https://replicate.com/account/api-tokens) and add it to your environment variables:

```sh
export REPLICATE_API_TOKEN=r8_...
```

Then, install the dependencies and run the script:

```sh
npm install
node index.js
```

## See also

- [Ideogram v2 inpainting on Replicate](https://replicate.com/blog/ideogram-v2-inpainting) - blog post announcing Ideogram v2 inpainting on Replicate
- [Replicate Playground](https://replicate.com/playground), where you can run multiple inpainting models right in the browser
- [Inpainter.app](https://github.com/replicate/inpainter) - Open-source Next.js app for inpainting images.
- [Outpainter.app](https://github.com/replicate/outpainter) - Open-source Nuxt.js app for extending images beyond their original canvas.