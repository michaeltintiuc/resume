"use client";

import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { resume } from "../resume";

export function Header() {
  const { name, images, links, profession, location, phone } = resume;

  return (
    <header className="content">
      <div className="width-50 width-mobile-phone-100 cell nopad relative">
        <div id="avatar-wrapper">
          <Image src={images.large} width={328} height={328} alt="avatar" />
        </div>

        <div id="links">
          {links.map(({ url, title, icon }) => (
            <a
              key={title}
              className="link"
              target="_blank"
              href={url}
              title={title}
            >
              <Icon icon={icon} />
            </a>
          ))}
        </div>
      </div>

      <div
        id="info"
        className="info width-50 width-mobile-phone-100 cell nopad"
      >
        <h1>{name}</h1>
        <p className="prof">{profession}</p>
        <p>
          <a
            href="https://goo.gl/maps/unB85JnKjCu"
            title={`Find ${location} on Google Maps`}
            target="_blank"
          >
            {location}
          </a>
          <Icon icon="material-symbols:my-location" />
        </p>

        <p>
          <a
            href={`tel:${phone.replace(/[\s\(\)]/g, "")}`}
            title={`Call ${phone}`}
          >
            {phone}
          </a>
          <Icon icon="material-symbols:call" />
        </p>
      </div>
    </header>
  );
}
