import logoImage from '../assets/logo.svg'
import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTradeForm } from './NewTradeForm';

export function Header(){
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} 
        className="max-w-44"
        alt="Trades" 
      />

      <Dialog.Root>
        <Dialog.Trigger 
          type='button' 
          className='border border-green-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-green-200  transition-colors duration-150 focus:outline-none focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-backgroud'
        >
          <Plus size={20} className='text-green-400' />
          Novo Trade
        </Dialog.Trigger >

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>
          <Dialog.Content className='absolute p-10 bg bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200border-red-700 hover:border-red-500 transition-colors duration-150'>
              <X size={24} aria-label='Fechar'/>
            </Dialog.Close>

            <Dialog.Title className='text-3xl leading-tight font-extrabold'>
              Criar Trade
            </Dialog.Title>

            <NewTradeForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      
    </div>
  )
}