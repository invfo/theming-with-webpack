import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

const basicTheme = {
  background: '#68C5DB',
  button: {
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    marginTop: '0',
    padding: '1px 7px 2px 7px',
  },
};

const advancedTheme = {
  background: 'linear-gradient(#68C5DB, #E0CA3C)',
  button: {
    border: '3px black dotted',
    borderRadius: '23px',
    fontSize: '30px',
    marginTop: '17px',
    padding: '5px 10px',
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

  input {
    margin-top: ${(props) => props.theme.button.marginTop};
  }
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
  border: ${(props) => props.theme.button.border};
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

const Title = ({children}) => <h1>{children}</h1>;

const theme = THEME === 'advanced' ? advancedTheme : basicTheme;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          { THEME === 'advanced' && <Title>Make your choice!</Title>}
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
