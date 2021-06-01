import { Component } from "react"

import { BlinkingCursor } from "./StyledComponents";

type dataTextProps = {
  dataText: string[]
}

const TYPING_SPEED: number = 150;
const DELETING_SPEED: number = 30;


class TypeWritterEffect extends Component<dataTextProps, {}> {
  private _isMounted: boolean;

  constructor(props) {
    super(props)

    this._isMounted = false;
  }

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.handleType()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleType = () => {

    const { dataText } = this.props;

    const { text, isDeleting, loopNum, typingSpeed } = this.state

    const i = loopNum % dataText.length;
    const fullText = dataText[i]

    this._isMounted && this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
    })

    if (!isDeleting && text === fullText) {
      this._isMounted && setTimeout(() => {
        this._isMounted && this.setState({ isDeleting: true })
      }, 500);
    } else if (isDeleting && text === '') {
      this._isMounted && this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      })
    }

    this._isMounted && setTimeout(() => {
      this._isMounted && this.handleType()
    }, typingSpeed);

  }

  render() {
    return (
      <>
        <span>
          {`${this.state.text}.`}
        </span>
        <BlinkingCursor></BlinkingCursor>
      </>
    )
  }

}

export default TypeWritterEffect;