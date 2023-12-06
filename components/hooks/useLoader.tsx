import { useState, useEffect, RefObject } from "react";

export const useLoader = (ref: RefObject<HTMLElement>) => {
  const [status, setStatus] = useState(false);
  const [length, setLength] = useState(0);
  const [current, setCurrent] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (!fontsLoaded) {
      areFontsReady();
    }
  });
  const areFontsReady = async () => {
    await (document as any).fonts.ready;
    setFontsLoaded(true);
  };
  useEffect(() => {
    const updateStatus = (images: HTMLImageElement[]) => {
      setCurrent(
        Math.round(
          (images
            .map((image) => {
              return image.complete;
            })
            .filter((el) => el).length /
            images.length) *
            100
        )
      );
      setStatus(
        images.map((image) => image.complete).every((item) => item === true)
      );
    };

    if (!ref.current) return;

    const imagesLoaded = Array.from(ref.current.querySelectorAll("img"));
    setLength(imagesLoaded.length);
    if (imagesLoaded.length === 0) {
      setStatus(true);
      setCurrent(100);
      return;
    }

    imagesLoaded.map((image) => {
      image.addEventListener(
        "load",
        () => {
          updateStatus(imagesLoaded);
        },
        {
          once: true,
        }
      );
      image.addEventListener(
        "error",
        () => {
          updateStatus(imagesLoaded);
        },
        {
          once: true,
        }
      );
    });

    return;
  }, [ref]);

  return { status, current };
};
