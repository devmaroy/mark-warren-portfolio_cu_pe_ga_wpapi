/* eslint-disable object-curly-newline */
import React from 'react';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  VKShareButton,
  RedditShareButton,
  TumblrShareButton,
  MailruShareButton,
  LivejournalShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  EmailShareButton,
} from 'react-share';
import SocialIcon from '../../../common/social/SocialIcon';
import blogPostShareType from '../../../../types/components/pages/blog/post/blogPostShareType';

const BlogPostShare = ({ share }) => {
  const shareUrl = window && window.location.href;

  const shareButtons = {
    facebook: FacebookShareButton,
    messenger: FacebookMessengerShareButton,
    twitter: TwitterShareButton,
    telegram: TelegramShareButton,
    whatsapp: WhatsappShareButton,
    linkedin: LinkedinShareButton,
    pinterest: PinterestShareButton,
    vk: VKShareButton,
    reddit: RedditShareButton,
    tumblr: TumblrShareButton,
    mailru: MailruShareButton,
    livejournal: LivejournalShareButton,
    viber: ViberShareButton,
    workplace: WorkplaceShareButton,
    line: LineShareButton,
    weibo: WeiboShareButton,
    pocket: PocketShareButton,
    instapaper: InstapaperShareButton,
    hatena: HatenaShareButton,
    email: EmailShareButton,
  };

  const getShare = () =>
    share.map(({ name, quote }) => ({
      name,
      component: shareButtons[name],
      quote,
    }));

  return (
    share && (
      <div className="blog-post-share">
        <h5 className="blog-post-share__heading">Share this article</h5>

        <ul className="blog-post-share__social">
          {getShare().map(({ name, component: ShareComponent, quote }) => (
            <li key={name}>
              <ShareComponent quote={quote} url={shareUrl}>
                <span>
                  <SocialIcon icon={name} />
                </span>
              </ShareComponent>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

BlogPostShare.propTypes = {
  ...blogPostShareType,
};

export default BlogPostShare;
