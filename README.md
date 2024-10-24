# Ideogram inpainting

This simple demo shows you how to use the [Ideogram V2 inpainting model](https://replicate.com/blog/ideogram-v2-inpainting) on Replicate using Node.js.

![inpainting](https://github.com/user-attachments/assets/2618ebc3-66fc-4d9b-9399-fcd57d07835a)

## What is inpainting?

Inpainting is like an AI-powered erasing and painting tool. You can use it to remove unwanted objects from an image, or change parts of an image to create something new.

To inpaint an image, you need:

1. A starting image that you want to change. (See [duck.jpg](duck.jpg))
2. A mask image that describes which parts of the image you want to inpaint. **Black** areas are inpainted and **white** areas are left unchanged. (See [mask.png](mask.png))
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

This will:

- Run the model with Replicate's cloud API
- Save the output image to `output.png`
- Open the output image in your default image viewer

## See also

- [replicate.com/ideogram-ai/ideogram-v2-turbo](https://replicate.com/ideogram-ai/ideogram-v2-turbo) - Turbo version of the model
- [replicate.com/ideogram-ai/ideogram-v2](https://replicate.com/ideogram-ai/ideogram-v2) - Full version of the model
- [Ideogram v2 inpainting on Replicate](https://replicate.com/blog/ideogram-v2-inpainting) - blog post announcing Ideogram v2 inpainting on Replicate
- [Replicate Playground](https://replicate.com/playground) - Web-based tool for inpainting images right on replicate.com
- [Inpainter.app](https://github.com/replicate/inpainter) - Open-source Next.js app for inpainting images
- [Outpainter.app](https://github.com/replicate/outpainter) - Open-source Nuxt.js app for extending images beyond their original canvas
- [Inpainting with Stable Diffusion on Replicate](https://replicate.com/docs/guides/stable-diffusion/inpainting) - an older guide, but still useful.