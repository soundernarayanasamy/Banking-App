import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Narayana',lastName: 'K', email:'soundernarayanasamy3663@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn ? `${loggedIn.firstName} ${loggedIn.lastName}` : 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
          />
        
        <TotalBalancebox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
        />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 123.50},{currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home
