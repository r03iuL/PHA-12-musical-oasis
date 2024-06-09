import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { Authcontext } from '../Providers/Authcontexts';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
  const { user, loading } = useContext(Authcontext);
  const token = localStorage.getItem('access-token');
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const response = await fetch(`https://musical-oasis-server.vercel.app/carts?email=${user?.email}`, {
          headers: {
            authorization: `bearer ${token}`
          }
        });
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch cart data');
        }
      } catch (error) {
        console.error(error);
        return []; // Return an empty array in case of error
      }
    }
  });

  console.log(cart);
  return [cart, refetch];
}

export default useCart;
