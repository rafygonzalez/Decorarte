import { readFile } from 'fs/promises';
import { ImageResponse } from 'next/og';
import { join } from 'path';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME
    },
    ...props
  };

  const file = await readFile(join(process.cwd(), './fonts/Inter-Bold.ttf'));
  const font = Uint8Array.from(file).buffer;

  // Read logo image
  const logoFile = await readFile(join(process.cwd(), './public/logo.png'));
  const logoBase64 = Buffer.from(logoFile).toString('base64');
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[400px] rounded-3xl">
          <img
            src={logoDataUrl}
            alt="Logo"
            width="380"
            height="55"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: font,
          style: 'normal',
          weight: 700
        }
      ]
    }
  );
}
