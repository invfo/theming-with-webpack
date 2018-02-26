import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

const basicTheme = {
  background: '#68C5DB',
  button: {
    borderRadius: '6px',
    fontSize: '16px',
    padding: '1px 7px 2px 7px',
  },
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  font-family: 'Cabin Sketch', cursive;
  font-size: 32px;
  margin: 20px auto 0 auto;
  padding: 20px 0;
  text-align: center;
  width: 440px;
`;

const Options = () => (
  <React.Fragment>
    <input type="radio" name="editor" value="vim" />Vim
    <input type="radio" name="editor" value="emacs" />Emacs
  </React.Fragment>
);

const Button = ({className}) => ( // className is required for the 'styled' function to work 
  <input type="submit" className={className} />
);

const StyledButton = styled(Button)`
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-family: inherit !important;
  font-size: ${(props) => props.theme.button.fontSize};
  padding: ${(props) => props.theme.button.padding};
`;

const Poll = () => (
  <form>
    <Options /><br />
    <StyledButton />
  </form>
);

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={basicTheme}>
        <Wrapper>
          <Poll />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
