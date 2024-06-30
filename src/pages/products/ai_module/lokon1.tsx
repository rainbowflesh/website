import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-daisyui";
import { useTranslation } from "react-i18next";
import YouTubePlayer from "youtube-player";

const VideoPlayerModal = () => {
  const playerRef = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    if (!playerRef.current) {
      playerRef.current = YouTubePlayer("player", {
        videoId: "UPqeiuFd7SE",
        width: "100%",
        height: "400px",
      });
    } else {
      playerRef.current.playVideo();
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };
  return (
    <div>
      <img
        onClick={handleOpenModal}
        src="/images/ai_module/lokon1/fpv_strike_demo.gif"
        alt="Fpv Strike Demo"
        className="product-detail-img-p2 rounded-lg bg-gray-100 dark:bg-base-200 m-auto transition-transform duration-300 transform hover:scale-130"
      />
      <Modal open={isModalOpen}>
        <Modal.Header>
          Fpv Strike Demo
          <Button
            size="sm"
            color="error"
            shape="circle"
            className="absolute right-4 top-4 text-xl"
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div id="player"></div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export const AIModuleLokon1 = () => {
  const { t } = useTranslation();
  const features = [{ name: t("detail.work_method"), description: t("detail_value.work_method") }];
  return (
    <div className="dot-background">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="-mt-5 bg-white dark:bg-base-100 rounded-box">
          <div className="textbox mt-4 mr-4 mb-4 ml-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {t("string.tech_specs")}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 ">{t("products.ai_module.lokon1")}</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900 dark:text-gray-50">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 relative overflow-hidden">
          <img
            src="/images/ai_module/lokon1/cover.jpg"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200"
          />
          <img
            src="/images/ai_module/lokon1/InfraCamera.png"
            className="product-detail-img-p1 rounded-lg bg-gray-100 dark:bg-base-200 rounded-lg shadow-lg"
          />
          <VideoPlayerModal />
        </div>
        <p className="text-xs text-balance bg-white dark:bg-black rounded-box">* {t("mention.rce1u")}</p>
      </div>
    </div>
  );
};
