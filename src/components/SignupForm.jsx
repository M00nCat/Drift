import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    experienceLevel: '',
    acceptedRules: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    } else {
      const parts = formData.name.trim().split(' ').filter(Boolean);
      if (parts.length < 2) {
        newErrors.name = 'Podaj imię i nazwisko';
      }
    }

    // Sprawdzenie email
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }

    // Sprawdzenie telefonu (dokładnie 9 cyfr)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    } else {
      const digits = formData.phone.replace(/\D/g, ''); // usuń wszystko poza cyframi
      if (digits.length !== 9) {
        newErrors.phone = 'Numer telefonu musi zawierać dokładnie 9 cyfr';
      }
    }

    if (!formData.carModel.trim()) newErrors.carModel = 'Model samochodu jest wymagany';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Poziom doświadczenia jest wymagany';
    if (!formData.acceptedRules) newErrors.acceptedRules = 'Musisz zaakceptować regulamin';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Rejestracja zakończona pomyślnie!');
      onSubmitSuccess();
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const inputClasses = `mt-1 block w-full rounded-md border-2 border-black shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 sm:text-sm`;
  const errorInputClasses = `mt-1 block w-full rounded-md border-2 border-red-500 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 sm:text-sm`;

  return (
      <div className="text-black max-w-xl w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Zapisz się na zawody</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Imię i nazwisko</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? errorInputClasses : inputClasses}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? errorInputClasses : inputClasses}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">Telefon</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? errorInputClasses : inputClasses}

            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="carModel" className="block text-sm font-medium">Model samochodu</label>
            <input
                type="text"
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className={errors.carModel ? errorInputClasses : inputClasses}
            />
            {errors.carModel && <p className="mt-1 text-sm text-red-600">{errors.carModel}</p>}
          </div>

          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium">Poziom doświadczenia</label>
            <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className={errors.experienceLevel ? errorInputClasses : inputClasses}
            >
              <option value="">Wybierz poziom</option>
              <option value="beginner">Początkujący</option>
              <option value="intermediate">Średniozaawansowany</option>
              <option value="advanced">Zaawansowany</option>
              <option value="professional">Profesjonalista</option>
            </select>
            {errors.experienceLevel && <p className="mt-1 text-sm text-red-600">{errors.experienceLevel}</p>}
          </div>

          <div>
            <label htmlFor="acceptedRules" className="flex items-center space-x-2">
              <input
                  type="checkbox"
                  id="acceptedRules"
                  name="acceptedRules"
                  checked={formData.acceptedRules}
                  onChange={handleChange}
                  className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
              />
              <span className="text-sm">
              Zapoznałem(-am) się i akceptuję{' '}
                <Link to="/regulations" className="underline text-yellow-500">
                regulamin
              </Link>.
            </span>
            </label>
            {errors.acceptedRules && <p className="mt-1 text-sm text-red-600">{errors.acceptedRules}</p>}
          </div>

          <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Zapisz się
            </button>
          </div>
        </form>
      </div>
  );
}

export default SignupForm;
