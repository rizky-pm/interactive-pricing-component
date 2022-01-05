import React from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header';
import PricingCard from './components/PricingCard/PricingCard';
import Attribution from './components/Attribution';

const Container = styled.main``;

function App() {
    return (
        <Container>
            <Header />
            <PricingCard />
            <Attribution />
        </Container>
    );
}

export default App;
