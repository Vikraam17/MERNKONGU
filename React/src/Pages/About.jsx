import React from 'react'

const About = ({ items, users }) => {
  return (
    <div>
      <ol>
        {items.map((fruit) => (<li>{fruit}</li>))}
      </ol>
      <h1>{users.username}</h1>
      <h1>{users.password}</h1>
      <p style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime dolores rerum beatae corporis ea ex iste corrupti accusantium exercitationem fugiat. Fuga voluptates consectetur veritatis ad nulla! Voluptatum explicabo adipisci tempora maiores minima pariatur eveniet iure nihil quasi provident rem accusamus exercitationem magni odit ipsam, tenetur quaerat, sed consequatur possimus vitae natus debitis. Non nulla optio vel cumque eligendi, ipsum commodi doloribus deleniti beatae dignissimos voluptatibus delectus, quibusdam tenetur reiciendis aliquam amet sunt, dolor exercitationem suscipit quos libero qui! Ratione, laboriosam iste. Sint commodi soluta obcaecati labore velit? Minima architecto magni, nisi inventore ab quo aperiam, voluptas fuga est ipsam sit.</p>
      
    </div>
  )
}

export default About