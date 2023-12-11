import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon
} from 'react-share'

// https://codesandbox.io/p/devbox/react-share-demo-474q4k?file=%2Fsrc%2FApp.tsx%3A1%2C1-346%2C1
// https://www.npmjs.com/package/react-share
// Se puede agregar imagen de ejemplo
// Falta agregar instragram

export default function SharePopUp() {
  const shareUrl = 'http://github.com'
  const title = 'GitHub'
  return (
    <div className='Demo__container'>
      <FacebookShareButton
        url={shareUrl}
        className='Demo__some-network__share-button'
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <FacebookMessengerShareButton
        url={shareUrl}
        appId='521270401588372'
        className='Demo__some-network__share-button'
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={title}
        className='Demo__some-network__share-button'
      >
        <XIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={shareUrl}
        title={title}
        className='Demo__some-network__share-button'
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=':: '
        className='Demo__some-network__share-button'
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <EmailShareButton
        url={shareUrl}
        subject={title}
        body='body'
        className='Demo__some-network__share-button'
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  )
}
