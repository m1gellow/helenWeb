import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";


const Contacts = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4  flex-center w-full sectionMargins">
      <div className="flex-col flex  gap-[100px]">
        <div>
          <Card className="lg:px-10  lg:py-10">
            <CardContent className="flex-center xl:flex-row flex flex-col gap-6">
              <h1 className="heading1">У вас остались вопросы? Напишите нам!</h1>
              <div className="flex flex-col gap-3">
                <p className="flex gap-2 contactsLinks">
                  <span>
                    <Mail />
                  </span>
                  Info@mail.ru
                </p>
                <p className="contactsLinks">VКонтакте</p>
                <p className="contactsLinks">Instagram</p>
                <p className="contactsLinks">Telegram</p>
                <p className="contactsLinks">Whatsapp</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
