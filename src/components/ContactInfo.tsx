import { Card, Divider, Hero } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Button, Textarea } from "react-daisyui";

export const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <Hero className="dot-background dark:dot-background-dark ">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <div className="flex flex-col w-full border-opacity-50">
            <Card className="grid rounded-box place-items-center dark:bg-base-100">
              <h1 className="text-4xl font-bold mt-2 mb-2">{t("string.contact_us")}</h1>
              <div className="grid">
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4 flex flex-col">
                    <p className="font-bold">{t("string.wechat")}:</p>
                    <img className="size-32 m-auto rounded-box" src="/images/contact/wechat1.jpg"></img>
                    <span className="text-black dark:text-white">{t("string.sale_manager")}</span>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <p className="font-bold">{t("string.whatsapp")}:</p>
                    <img className="size-32 m-auto rounded-box" src="/images/contact/whatsapp.jpg"></img>
                    <span className="text-black dark:text-white">{t("string.sale_manager")}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-bold">{t("string.email")}:</p>
                  <a className="text-gray-400" href={"mailto:sale@zeewind-uav.com"}>
                    <span className="text-black dark:text-white">{t("string.sale_manager")}: </span>
                    sale@zeewind-uav.com
                  </a>
                  <br />
                  <a className="text-gray-400 mb-2" href={"mailto:contact@zeewind-uav.com"}>
                    <span className="text-black dark:text-white">{t("string.tech_support")}: </span>
                    contact@zeewind-uav.com
                  </a>
                </div>
              </div>
            </Card>
            <Divider className="dark:text-white ">{t("string.or")}</Divider>
            <Card className="grid rounded-box place-items-center">
              <ContactForm />
            </Card>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className="isolate bg-white dark:bg-base-300 px-6 py-8 lg:px-8">
      <h1 className="text-3xl font-bold mt-2 mb-2">{t("string.leave_ur_contact")}</h1>
      <form action="https://formspree.io/f/moqgjqll" method="POST">
        <div className="grid grid-cols-2 gap-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{t("string.first_name")}</span>
            </div>
            <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
          </label>
          <label>
            <div className="label">
              <span className="label-text">{t("string.last_name")}</span>
            </div>
            <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
          </label>
        </div>
        <label>
          <div className="label">
            <span className="label-text">{t("string.company")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.job_title")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.country")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.email")}</span>
          </div>
          <input
            type="email"
            name="email"
            className="textarea-primary input text-xs input-bordered w-full max-w-xs"
            placeholder={"*" + t("string.required")}
          />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.phone")}</span>
          </div>
          <input name="message" type="text" className="input input-bordered w-full text-xs max-w-xs" />
        </label>
        <label>
          <div className="label">
            <span className="label-text">{t("string.ur_msg")}</span>
          </div>
          <Textarea
            className="textarea-primary textarea textarea-bordered textarea-lg text-xs w-full max-w-xs"
            placeholder={t("text.ur_msg_placeholder")}
            name="message"
          />
        </label>
        <br />
        <Button color="primary" fullWidth={true} className="mt-2" type="submit">
          {t("string.send")}
        </Button>
      </form>
      <p className="text-xs mt-2 -mb-4 text-stone-600 dark:text-stone-400">* {t("text.contact_us_mention")}</p>
    </div>
  );
}
