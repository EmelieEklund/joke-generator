import '../app.css'
import { motion } from 'framer-motion';

const Joke = ({text}) =>  {
    const display = text.joke || "Joke will appear here...";

        return(                
                <motion.div
                  key={display}                     
                    initial={{ rotate: 0 }}           
                      animate={{ rotate: 360 }}        
                      transition={{ duration: 0.6 }}    
                      className="card shadow p-3 mb-5 bg-light rounded"
                    >
                  <div className="card-body d-flex flex-column">
                    <p className="card-text mt-auto d-flex justify-content-center">
                        {display}
                    </p>
                  </div>
                </motion.div>
    );
};


export default Joke;