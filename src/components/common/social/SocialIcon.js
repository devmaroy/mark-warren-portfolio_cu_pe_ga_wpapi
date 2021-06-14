import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialIconType from '../../../types/components/common/social/socialIconType';
import kofiIcon from '../../../images/icons/social/kofi.svg';

const SocialIcon = ({ icon, type = 'normal', fixedWidth = true }) => {
  const socialIcon = icon.toLowerCase();

  const squareIcons = {
    facebook: 'facebook-square',
    twitter: 'twitter-square',
    linkedin: 'linkedin',
    youtube: 'youtube-square',
    instagram: 'instagram',
    deviantart: 'deviantart',
    whatsapp: 'whatsapp-square',
    tumblr: 'tumblr-square',
    skype: 'skype',
    viber: 'viber',
    snapchat: 'snapchat-square',
    vk: 'vk',
    pinterest: 'pinterest-square',
    telegram: 'telegram',
    reddit: 'reddit-square',
    flickr: 'flickr',
    quora: 'quora',
    discord: 'discord',
    tiktok: 'tiktok',
    twitch: 'twitch',
    medium: 'medium',
    vimeo: 'vimeo-square',
    behance: 'behance-square',
    dribbble: 'dribbble-square',
    github: 'github-square',
    trello: 'trello',
    patreon: 'patreon',
    kofi: kofiIcon,
  };

  const normalIcons = {
    facebook: 'facebook-f',
    twitter: 'twitter',
    linkedin: 'linkedin-in',
    youtube: 'youtube',
    instagram: 'instagram',
    deviantart: 'deviantart',
    whatsapp: 'whatsapp',
    tumblr: 'tumblr',
    skype: 'skype',
    viber: 'viber',
    snapchat: 'snapchat',
    vk: 'vk',
    pinterest: 'pinterest',
    telegram: 'telegram-plane',
    reddit: 'reddit',
    flickr: 'flickr',
    quora: 'quora',
    discord: 'discord',
    tiktok: 'tiktok',
    twitch: 'twitch',
    medium: 'medium-m',
    vimeo: 'vimeo-v',
    behance: 'behance',
    dribbble: 'dribbble',
    github: 'github',
    trello: 'trello',
    patreon: 'patreon',
    kofi: kofiIcon,
  };

  const renderIcon = (typeToRender) => {
    const imgIcons = ['kofi'];

    switch (typeToRender) {
      case 'square':
        return imgIcons.includes(socialIcon) ? (
          <img
            src={squareIcons[socialIcon]}
            alt={socialIcon}
            className={classNames('svg-inline--fa', { 'fa-fw': fixedWidth })}
          />
        ) : (
          <FontAwesomeIcon
            icon={['fab', squareIcons[socialIcon]]}
            fixedWidth={fixedWidth}
          />
        );

      default:
        return imgIcons.includes(socialIcon) ? (
          <img
            src={normalIcons[socialIcon]}
            alt={socialIcon}
            className={classNames('svg-inline--fa', { 'fa-fw': fixedWidth })}
          />
        ) : (
          <FontAwesomeIcon
            icon={['fab', normalIcons[socialIcon]]}
            fixedWidth={fixedWidth}
          />
        );
    }
  };

  return renderIcon(type);
};

SocialIcon.propTypes = {
  ...socialIconType,
};

export default SocialIcon;
