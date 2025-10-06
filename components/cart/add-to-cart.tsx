'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import { useProduct } from 'components/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import { useActionState, useState } from 'react';
import { toast } from 'sonner';
import { useCart } from './cart-context';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  existingQuantity,
  isLoading
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  existingQuantity: number;
  isLoading: boolean;
}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-primary p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';
  const loadingClasses = 'opacity-75 cursor-wait';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Agotado
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Por favor selecciona una opción"
        disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
        Agregar al Carrito
      </button>
    );
  }

  const buttonText = existingQuantity > 0 
    ? `Agregar más (${existingQuantity} en carrito)`
    : 'Agregar al Carrito';

  const loadingText = existingQuantity > 0
    ? 'Agregando más...'
    : 'Agregando...';

  return (
    <button
      aria-label={existingQuantity > 0 ? "Agregar más al carrito" : "Agregar al carrito"}
      disabled={isLoading}
      className={clsx(buttonClasses, {
        'hover:opacity-90': !isLoading,
        [loadingClasses]: isLoading
      })}
    >
      <div className="absolute left-0 ml-4">
        <PlusIcon className={clsx("h-5 transition-transform", {
          "animate-spin": isLoading
        })} />
      </div>
      {isLoading ? loadingText : buttonText}
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { cart, addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);
  const [isLoading, setIsLoading] = useState(false);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  // Calcular cantidad existente en el carrito
  const existingQuantity = cart?.lines.find(
    (line) => line.merchandise.id === selectedVariantId
  )?.quantity || 0;

  const handleAddToCart = async () => {
    if (!finalVariant) return;
    
    setIsLoading(true);

    try {
      // Actualización optimista inmediata
      addCartItem(finalVariant, product);
      
      // Feedback inmediato después de la actualización optimista
      toast.success('🛒 ¡Producto agregado al carrito!', {
        description: `${product.title} se ha añadido correctamente`,
        duration: 3000,
      });

      // Server action para persistencia (en segundo plano)
      await addItemAction();
      
    } catch (error) {
      toast.error('❌ Error al agregar producto', {
        description: 'Hubo un problema, por favor intenta de nuevo',
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      action={async () => {
        await handleAddToCart();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        existingQuantity={existingQuantity}
        isLoading={isLoading}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
