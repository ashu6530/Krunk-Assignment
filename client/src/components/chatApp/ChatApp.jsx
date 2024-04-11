import "./chatApp.css";

const ChatApp = () => {
  return (
    <div className="main__container">
      <div className="main__group">
        <div className="frame-container">
          <div className="chatbot__group">
            <img className="chatbot__icon" alt="" src="/chatbot.png" />
            <div className="name" />
          </div>

          <div className="name__container">
            <div className="name__container-top">
              <div className="name__timpu">
                <h3 className="timpu">{`Timpu `}</h3>
              </div>
              <img
                className="tick"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="chat-assistant-wrapper">
              <div className="chat-assistant">Chat assistant</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="active__parent">
            <div className="active" />
            <div className="online">Online</div>
          </div>
        </div>
      </div>
      <div className="active1">
        <div className="active2">
          <div className="active3">
            <div className="active4">
              <div className="hi-sam-i">
                Hi Sam! I am your personal shopping assistant , how can i help
                you today ?
              </div>
            </div>
            <div className="active5">
              <div className="pm">4:45 PM</div>
            </div>
          </div>
          <div className="chose-your-role">
            <div className="handbag__container">
              <div className="i-am-looking">
                I am looking for a hand bag, with long strap .
              </div>
            </div>
            <div className="pm-wrapper">
              <div className="pm1">4:46 PM</div>
            </div>
          </div>
          <div className="popular-tags-for-handbag-parent">
            <div className="popular-tags-for">Popular tags for handbag</div>
            <div className="phone-number">
              <div className="component">
                <button className="sign-in-message">
                  <div className="already-have-an-account">
                    <div className="clutch">Clutch</div>
                  </div>
                </button>
                <button className="component-inner">
                  <div className="fabric-lining-wrapper">
                    <div className="fabric-lining">Fabric lining</div>
                  </div>
                </button>
                <button className="component-child">
                  <div className="baggit-wrapper">
                    <div className="baggit">{`Baggit `}</div>
                  </div>
                </button>
                <div className="frame-div">
                  <div className="multi-compartment-wrapper">
                    <div className="multi-compartment">Multi </div>
                  </div>
                </div>
              </div>
              <div className="chevron-right-wrapper">
                <img
                  className="chevron-right-icon"
                  loading="lazy"
                  alt=""
                  src="/chevronright.svg"
                />
              </div>
            </div>
          </div>
          <div className="main__container1">
            <div className="main__container2">
              <div className="main__container3">
                <div className="main__container4">
                  <img
                    className="frame-child"
                    alt=""
                    src="/frame-5591@2x.png"
                  />
                  <div className="main__container5">
                    <div className="main__container6">
                      <div className="bags-on-timpu-wrapper">
                        <div className="bags-on-timpu-container">
                          <span className="bags-on">{`Bags on `}</span>
                          <span className="timpu1">Timpu</span>
                        </div>
                      </div>
                      <img
                        className="vector-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    <div className="products-parent">
                      <div className="products">{`1123 products `}</div>
                      <img
                        className="chevron-right-icon1"
                        alt=""
                        src="/chevronright-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="or-set-filter">
                  Or set filter and help us choose the best bag for you.
                </div>
              </div>
              <div className="pm-container">
                <div className="pm2">4:48 PM</div>
              </div>
            </div>
            <div className="main__container7">
              <div className="select-filters-parent">
                <div className="select-filters">Select filters</div>
                <div className="filter-options">
                  <img
                    className="sliders-horizontal-icon"
                    loading="lazy"
                    alt=""
                    src="/slidershorizontal.svg"
                  />
                  <div className="filter">Filter</div>
                </div>
              </div>
              <div className="color-size-brand">
                <div className="products-list">
                  <div className="settings-menu">
                    <div className="strap">Strap</div>
                    <div className="message-input">-</div>
                    <div className="long">Long</div>
                  </div>
                  <img
                    className="check-square-2-icon"
                    loading="lazy"
                    alt=""
                    src="/checksquare2.svg"
                  />
                </div>
                <button className="colour-parent">
                  <div className="colour">Colour</div>
                  <img
                    className="check-square-2-icon1"
                    alt=""
                    src="/checksquare2-1.svg"
                  />
                </button>
                <button className="size-parent">
                  <div className="size">Size</div>
                  <img
                    className="check-square-2-icon2"
                    alt=""
                    src="/checksquare2-1.svg"
                  />
                </button>
                <div className="brand-parent">
                  <div className="brand">Brand</div>
                  <img
                    className="check-square-2-icon3"
                    alt=""
                    src="/checksquare2-1.svg"
                  />
                </div>
                <button className="material-parent">
                  <div className="material">Material</div>
                  <img
                    className="check-square-2-icon4"
                    alt=""
                    src="/checksquare2-1.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="powered-by-logo-parent">
        <div className="powered-by-logo">
          <div className="type-your-message-parent">
            <div className="type-your-message">Type your message</div>
            <img
              className="paperclip-icon"
             
              alt=""
              src="/paperclip.svg"
            />
          </div>
          <div className="krunkai-logo">
            <div className="powered-by-parent">
              <div className="powered-by">{`Powered by `}</div>
              <div className="krunkai">Krunk.ai</div>
              <div className="logo-wrapper">
                <img
                  className="logo-icon"
                  alt=""
                  src="/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="vector-wrapper">
          <img
            className="vector-icon1"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
