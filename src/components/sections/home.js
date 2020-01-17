import React from 'react'

import "../../styles/home.scss"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFirstdraft, faInstagram } from '@fortawesome/free-brands-svg-icons'

const J1 = (props) => {
  return (
    <svg width={130} height={150} viewBox="0 0 130 150" {...props}>
      <defs>
        <filter
          x="-21.9%"
          y="-4.4%"
          width="143.8%"
          height="112.3%"
          filterUnits="objectBoundingBox"
          id="prefix__a"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={1}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-9.3%"
          y="-22.5%"
          width="118.6%"
          height="145%"
          filterUnits="objectBoundingBox"
          id="prefix__c"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="prefix__b" d="M120 130h32v114h-32z" />
        <path
          d="M55 257h97c-4.422 22.793-24.455 40-48.5 40S59.422 279.793 55 257z"
          id="prefix__d"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform={props.translate1}>
          <use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <use fill="#394760" xlinkHref="#prefix__b" />
        </g>
        <g transform={props.translate2}>
          <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <use fill="#F0D500" xlinkHref="#prefix__d" />
        </g>
      </g>
    </svg>
  )
}

const A1 = (props) => {
  return (
    <svg width={130} height={150} viewBox="0 0 130 150" {...props}>
      <defs>
        <filter
          x="-10.3%"
          y="-5.8%"
          width="120.6%"
          height="114.4%"
          filterUnits="objectBoundingBox"
          id="a1-prefix__a"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-26.3%"
          y="-15.1%"
          width="152.6%"
          height="137.7%"
          filterUnits="objectBoundingBox"
          id="a1-prefix__c"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect id="a1-prefix__d" x={30} y={114} width={38} height={53} rx={8} />
        <path id="a1-prefix__b" d="M48.5 0L97 139H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform={props.translate1}>
          <use fill="#000" filter="url(#a1-prefix__a)" xlinkHref="#a1-prefix__b" />
          <use fill="#6EDEC1" xlinkHref="#a1-prefix__b" />
        </g>
        <g transform={props.translate2}>
          <use fill="#000" filter="url(#a1-prefix__c)" xlinkHref="#a1-prefix__d" />
          <use fill="#394760" xlinkHref="#a1-prefix__d" />
        </g>
      </g>
    </svg>
  )
}

const S1 = (props) => {
  return (
    <svg width={140} height={150} viewBox="0 0 140 150" {...props}>
      <defs>
        <filter
          x="-33.3%"
          y="-8.1%"
          width="166.7%"
          height="120.2%"
          filterUnits="objectBoundingBox"
          id="s1-prefix__a"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-13.6%"
          y="-29.6%"
          width="127.2%"
          height="181.5%"
          filterUnits="objectBoundingBox"
          id="s1-prefix__c"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={1}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={1}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter2" />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter2"
            result="shadowBlurOuter2"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter2"
            result="shadowMatrixOuter2"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="shadowMatrixOuter2" />
          </feMerge>
        </filter>
        <filter
          x="-9.9%"
          y="-25.9%"
          width="119.8%"
          height="159.3%"
          filterUnits="objectBoundingBox"
          id="s1-prefix__e"
        >
          <feMorphology
            radius={0.5}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={1}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="s1-prefix__b" d="M51 41h30v99H51z" />
        <path
          d="M132 27H51C54.693 11.615 71.422 0 91.5 0s36.807 11.615 40.5 27z"
          id="s1-prefix__d"
        />
        <path
          d="M0 154h81c-3.693 15.385-20.422 27-40.5 27S3.693 169.385 0 154z"
          id="s1-prefix__f"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform={props.translate1}>
          <use fill="#000" filter="url(#s1-prefix__a)" xlinkHref="#s1-prefix__b" />
          <use fill="#394760" xlinkHref="#s1-prefix__b" />
        </g>
        <g transform={props.translate2}>
          <use fill="#000" filter="url(#s1-prefix__c)" xlinkHref="#s1-prefix__d" />
          <use fill="#8572C2" xlinkHref="#s1-prefix__d" />
        </g>
        <g transform={props.translate3}>
          <use fill="#000" filter="url(#s1-prefix__e)" xlinkHref="#s1-prefix__f" />
          <use fill="#D66A99" xlinkHref="#s1-prefix__f" />
        </g>
      </g>
    </svg>
  )
}

const O1 = (props) => {
  return (
    <svg width={130} height={150} viewBox="0 0 130 150" {...props}>
      <defs>
        <ellipse id="o1-prefix__b" cx={60} cy={69} rx={60} ry={60} />
        <ellipse id="o1-prefix__d" cx={60} cy={68.5} rx={20} ry={20} />
        <filter
          x="-6.9%"
          y="-5.1%"
          width="113.8%"
          height="113%"
          filterUnits="objectBoundingBox"
          id="o1-prefix__a"
        >
          <feMorphology
            radius={1}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-19%"
          y="-17.9%"
          width="138%"
          height="135.8%"
          filterUnits="objectBoundingBox"
          id="o1-prefix__c"
        >
          <feMorphology
            radius={1.5}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={2}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform={props.translate1}>
          <use fill="#000" filter="url(#o1-prefix__a)" xlinkHref="#o1-prefix__b" />
          <use stroke="#979797" fill="#F0D500" xlinkHref="#o1-prefix__b" />
        </g>
        <g transform={props.translate2}>
          <use fill="#000" filter="url(#o1-prefix__c)" xlinkHref="#o1-prefix__d" />
          <use stroke="#979797" fill="#394760" xlinkHref="#o1-prefix__d" />
        </g>
      </g>
    </svg>
  )
}

const N1 = (props) => {
  return (
    <svg width={130} height={150} viewBox="0 0 130 150" {...props}>
      <defs>
        <filter
          x="-31.2%"
          y="-4.8%"
          width="162.5%"
          height="111.9%"
          filterUnits="objectBoundingBox"
          id="n1-prefix__a"
        >
          <feMorphology
            radius={0.5}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={2.5}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-10.2%"
          y="-7.5%"
          width="123.9%"
          height="117.6%"
          filterUnits="objectBoundingBox"
          id="n1-prefix__c"
        >
          <feMorphology
            radius={1.5}
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx={2}
            dy={2}
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation={3}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path id="n1-prefix__b" d="M0 0h32v168H0z" />
        <path
          d="M112.54 60.725h.46V167H76.882V60.725h.799c-3.294-8.042-11.538-13.743-21.188-13.743-11.06 0-20.274 7.489-22.303 17.407H.085C1.834 36.282 26.42 14 56.493 14c28.753 0 52.49 20.37 56.047 46.725z"
          id="n1-prefix__d"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform={props.translate1}>
          <use fill="#000" filter="url(#n1-prefix__a)" xlinkHref="#n1-prefix__b" />
          <use fill="#394760" xlinkHref="#n1-prefix__b" />
        </g>
        <g transform={props.translate2}>
          <use fill="#000" filter="url(#n1-prefix__c)" xlinkHref="#n1-prefix__d" />
          <use stroke="#979797" fill="#FF9806" xlinkHref="#n1-prefix__d" />
        </g>
      </g>
    </svg>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };

  render() {
    console.log(this.state.offset)
    return (
      <Container fluid={true} className="home-main" style={{backgroundPositionY: this.state.offset}}>
        {/* <div className="logoName">
            <J1
              translate1={`translate(-54 ${-120 + this.state.offset / 10})`}
              translate2={`translate(-54 ${-120 - this.state.offset / 10})`}
              style={{ marginRight: "20px" }} />
            <A1
              translate1={`translate(7 ${12 - this.state.offset / 8})`}
              translate2={`translate(7 ${12 + this.state.offset / 12})`}
              style={{ marginRight: "10px" }}/>
            <S1
              translate1={`translate(5 ${3 - this.state.offset / 14})`}
              translate2={`translate(5 ${3 + this.state.offset / 5})`}
              translate3={`translate(5 ${3 - this.state.offset / 5})`}
              style={{ marginRight: "5px" }}/>
            <O1
              translate1={`translate(6 ${30 - this.state.offset / 10})`}
              translate2={`translate(6 ${30 + this.state.offset / 8})`}
              style={{ marginTop: "0em", marginRight: "15px" }} />
            <N1
              translate1={`translate(6 ${4 - this.state.offset / 10})`}
              translate2={`translate(6 ${4 + this.state.offset / 10})`}
              />
        </div> */}
        <div className="nonlogo">
          <p className="description">
            Hello!
            My name is
          </p>
          <div className="logoName">
              <J1
                translate1={`translate(-54 ${-120 + this.state.offset / 10})`}
                translate2={`translate(-54 ${-120 - this.state.offset / 10})`}
                style={{ marginRight: "20px" }} />
              <A1
                translate1={`translate(7 ${12 - this.state.offset / 8})`}
                translate2={`translate(7 ${12 + this.state.offset / 12})`}
                style={{ marginRight: "10px" }}/>
              <S1
                translate1={`translate(5 ${3 - this.state.offset / 14})`}
                translate2={`translate(5 ${3 + this.state.offset / 5})`}
                translate3={`translate(5 ${3 - this.state.offset / 5})`}
                style={{ marginRight: "5px" }}/>
              <O1
                translate1={`translate(6 ${30 - this.state.offset / 10})`}
                translate2={`translate(6 ${30 + this.state.offset / 8})`}
                style={{ marginTop: "0em", marginRight: "15px" }} />
              <N1
                translate1={`translate(6 ${4 - this.state.offset / 10})`}
                translate2={`translate(6 ${4 + this.state.offset / 10})`}
                />
          </div>
          {/* <h1>
            <span className="name">Jason Chen.</span>
          </h1> */}
          <h1 className="sub-desc underline">I build software.</h1>
          <p className="description">
            I'm a software engineer in Los Angeles that builds web applications and
            experiments with data science.
          </p>
          <div className="contact01">
          <div className="divider"></div>
          <a className="social" href="https://github.com/jaloo555">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="social" href="https://www.instagram.com/chisanchen/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="social" href="https://www.linkedin.com/in/chenchisan/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="mail-link" href="mailto:chisanch@usc.edu">
            <FontAwesomeIcon icon="envelope" />
          </a>
          <a className="social" href="./Resume.pdf">
            <FontAwesomeIcon icon={faFirstdraft} />
          </a>
        </div>
        </div>
      </Container>
    )
  }
}

export default Home