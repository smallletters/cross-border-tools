'use client';

import { useState } from 'react';
import { categories } from '@/lib/tools';
import { t, type Locale } from '@/lib/i18n';

interface PageProps {
  params: { lang: string };
}

export default function SubmitPage({ params }: PageProps) {
  const locale = params.lang as Locale;

  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    category: 'product-research',
    tags: '',
    price: '',
    email: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', url: '', description: '', category: 'product-research', tags: '', price: '', email: '', notes: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('submitTitle', locale)}</h1>
          <p className="text-blue-100 text-lg">{t('submitSubtitle', locale)}</p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
            <span className="text-xl">📋</span> {t('submitNotice', locale)}
          </h3>
          <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
            <li>• {t('notice1', locale)}</li>
            <li>• {t('notice2', locale)}</li>
            <li>• {t('notice3', locale)}</li>
            <li>• {t('notice4', locale)}</li>
          </ul>
        </div>

        {/* Success */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 dark:text-green-100">{t('submitSuccess', locale)}</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">{t('successDesc', locale)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {submitStatus === 'error' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-red-900 dark:text-red-100">{t('submitFailed', locale)}</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">{t('failedDesc', locale)}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('toolName', locale)} <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Helium 10" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('toolUrl', locale)} <span className="text-red-500">*</span></label>
              <input type="url" name="url" value={formData.url} onChange={handleChange} required placeholder="https://" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('description', locale)} <span className="text-red-500">*</span></label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('categoryLabel', locale)} <span className="text-red-500">*</span></label>
              <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {categories.filter(c => c.id !== 'all').map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('tags', locale)} <span className="text-gray-400 text-xs">{t('tagsHint', locale)}</span></label>
              <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Amazon, Product Research" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('price', locale)}</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Free, $29/month" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('email', locale)} <span className="text-red-500">*</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-xs text-gray-500 mt-1">{t('emailHint', locale)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{t('notes', locale)} <span className="text-gray-400 text-xs">{t('tagsHint', locale)}</span></label>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows={2} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" required className="w-5 h-5 mt-0.5" />
              <label className="text-sm text-gray-600 dark:text-gray-400">{t('agreeTerms', locale)}</label>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>{t('submitting', locale)}</span>
              </>
            ) : (
              <span>{t('submitBtn', locale)}</span>
            )}
          </button>
        </form>

        {/* Priority */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-xl flex items-center justify-center text-2xl">⚡</div>
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">{t('priorityReview', locale)}</h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm mb-3">{t('priorityDesc', locale)}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">{t('basicListing', locale)} ¥99</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">{t('featuredSpot', locale)} ¥299</span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm">{t('annualMember', locale)} ¥999</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
