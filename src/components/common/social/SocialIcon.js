import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialIconType from '../../../types/components/common/social/socialIconType';
import kofiIcon from '../../../images/icons/social/kofi.svg';
import mailruIcon from '../../../images/icons/social/mailru.svg';
import mailruSquareIcon from '../../../images/icons/social/mailru-square.svg';
import livejournalIcon from '../../../images/icons/social/livejournal.svg';
import livejournalSquareIcon from '../../../images/icons/social/livejournal-square.svg';
import workplaceIcon from '../../../images/icons/social/workplace.svg';
import instapaperIcon from '../../../images/icons/social/instapaper.svg';
import instapaperSquareIcon from '../../../images/icons/social/instapaper-square.svg';
import hatenaIcon from '../../../images/icons/social/hatena.svg';
import hatenaSquareIcon from '../../../images/icons/social/hatena-square.svg';
import emailIcon from '../../../images/icons/social/email.svg';
import emailSquareIcon from '../../../images/icons/social/email-square.svg';

const SocialIcon = ({
  icon,
  type = 'normal',
  fixedWidth = true,
  className = 'social-icon__img',
}) => {
  const socialIcon = icon.toLowerCase();

  const squareIcons = {
    facebook: 'facebook-square',
    messenger: 'facebook-messenger',
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
    pocket: 'get-pocket',
    weibo: 'weibo',
    line: 'line',
    kofi: kofiIcon,
    mailru: mailruSquareIcon,
    livejournal: livejournalSquareIcon,
    workplace: workplaceIcon,
    instapaper: instapaperSquareIcon,
    hatena: hatenaSquareIcon,
    email: emailSquareIcon,
  };

  const normalIcons = {
    facebook: 'facebook-f',
    messenger: 'facebook-messenger',
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
    pocket: 'get-pocket',
    weibo: 'weibo',
    line: 'line',
    kofi: kofiIcon,
    mailru: mailruIcon,
    livejournal: livejournalIcon,
    workplace: workplaceIcon,
    instapaper: instapaperIcon,
    hatena: hatenaIcon,
    email: emailIcon,
  };

  const imgIcons = [
    'kofi',
    'mailru',
    'livejournal',
    'workplace',
    'instapaper',
    'hatena',
    'email',
  ];

  const renderIcon = (typeToRender) => {
    const isImgIcon = imgIcons.includes(socialIcon);
    const iconClassName = classNames(`svg-inline--fa ${className}`, {
      'fa-fw': fixedWidth,
    });

    switch (typeToRender) {
      case 'square':
        if (isImgIcon) {
          const SocialIconComponent = squareIcons[socialIcon];
          return <SocialIconComponent className={iconClassName} />;
        }

        return (
          <FontAwesomeIcon
            icon={['fab', squareIcons[socialIcon]]}
            fixedWidth={fixedWidth}
          />
        );

      default:
        if (isImgIcon) {
          const SocialIconComponent = normalIcons[socialIcon];
          return <SocialIconComponent className={iconClassName} />;
        }

        return (
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
